function setRoutes(routes) {
  return routes.map((item) => {
    if (item.componentUrl) {
      item.component = require(`@/pages${item.componentUrl}.jsx`).default;
    }
    if (item.routes) {
      item.routes = setRoutes(item.routes);
    }
    return item;
  });
}
export function patchRoutes({ routes }) {
  const home = routes.find((item) => {
    return item.path === "/"
  }).routes.find((item) => {
    return item.path === "/"
  })
  const menuList = localStorage.getItem("menu");
  if (menuList) {
    const menu = JSON.parse(menuList)
    const menusConfig = setRoutes(menu);
    home.routes = [
      ...home.routes,
      ...menusConfig,
    ]
    console.log(home);
  }
}