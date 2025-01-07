const getHeader = (user) => {
  return `<p>Hello ${user.firstName || user.name || "there"},</p>`;
};

export default getHeader;
