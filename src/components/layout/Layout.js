import MainNavigation from "./MainNavigation";
import css from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={css.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
