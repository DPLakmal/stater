import pluralize from "pluralize";
import * as changeCase from "change-case";
import * as fs from "fs";
import routes from "./src/prismicio-routes.json" assert { type: "json" };

export default function (plop) {
  plop.setGenerator("Blog", {
    description: "This will add a blog",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page type name",
        default: "Blog",
      },
      {
        type: "input",
        name: "id",
        message: "Page type ID",
        default: "blog",
      },
      {
        type: "input",
        name: "slug",
        message: "URL Structure",
        default: "blog",
      },
    ],
    actions: function (props) {
      const { formattedName, formattedId, formattedSlug } = formatProps(props);
      addRoute(formattedId, formattedSlug);

      return [
        {
          type: "add",
          path: `customtypes/${formattedId}/index.json`,
          templateFile: "plop-templates/blog/customtype.hbs",
          data: { formattedName, formattedId },
        },
        {
          type: "add",
          path: `src/app/(pages)/${formattedSlug}/[uid]/page.jsx`,
          templateFile: "plop-templates/blog/page.hbs",
          data: { formattedName, formattedId },
        },
      ];
    },
  });

  plop.setGenerator("Repeating Page", {
    description:
      "This will add a reusable type such as for services, projects, etc.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page type name",
      },
      {
        type: "input",
        name: "id",
        message: "Page type ID",
      },
      {
        type: "input",
        name: "slug",
        message: "URL Structure",
      },
    ],
    actions: function (props) {
      const { formattedName, formattedId, formattedSlug } = formatProps(props);

      addRoute(formattedId, formattedSlug);

      return [
        {
          type: "add",
          path: `customtypes/${formattedId}/index.json`,
          templateFile: "plop-templates/reusable/customtype.hbs",
          data: { formattedName, formattedId },
        },
        {
          type: "add",
          path: `src/app/(pages)/${formattedSlug}/[uid]/page.jsx`,
          templateFile: "plop-templates/reusable/page.hbs",
          data: { formattedName, formattedId },
        },
      ];
    },
  });
}

const formatProps = (props = {}) => {
  const { name, id, slug } = props;

  if (!name || !id || !slug) {
    throw Error("All the fields are required!");
  }
  const formattedName = changeCase.pascalCase(pluralize(name, 1));

  const formattedId = changeCase.snakeCase(pluralize(id, 1));

  const formattedSlug = changeCase.snakeCase(pluralize(slug, 1));

  return { formattedSlug, formattedName, formattedId };
};

const addRoute = (formattedId, formattedSlug) => {
  if (routes.find((r) => r.type === formattedId)) {
    throw Error("The type already exists!");
  }

  const path = `/${formattedSlug}/:uid`;

  routes.push({ type: formattedId, path });

  fs.writeFileSync(
    "./src/prismicio-routes.json",
    JSON.stringify(routes, null, 2),
  );
};
