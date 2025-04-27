import logo from "./logo.svg";
import "./Sidebar8.css";

const navItems = ["home-alt1", "heart", "mention", "plus"];

const footerItems = ["gear", "link-out"];

const innerItems = [
  {
    name: "Dashboard",
    icon: "dashboard",
  },
  {
    name: "Products",
    icon: "shipping-box-v1",
  },
  {
    name: "Customers",
    icon: "person",
  },
  {
    name: "Messages",
    icon: "open-envelope",
  },
  {
    name: "Images",
    icon: "image",
  },
  {
    name: "Inventory",
    icon: "data",
  },
  {
    name: "Hashtags",
    icon: "hashtag",
  },
];

const Icon = ({ icon }) => <i className={`ai-${icon}`} />;

const Button = ({ item }) => (
  <button type="button">
    <Icon icon={item.icon} />
    <p>{item.name}</p>
  </button>
);

const Header = () => (
  <header>
    <div>
      <h2>Untitled UI</h2>
      <h3>store.untitledui.com</h3>
    </div>
    <Icon icon="chevron-vertical" />
  </header>
);

export const Sidebar8 = () => {
  return (
    <section className="page sidebar-8-page">
      <aside class="sidebar-8">
        <div class="sidebar-8-left">
          <span className="sidebar-8-dots" />
          <img src={logo} />
          {navItems.map((item) => (
            <button>
              <Icon icon={item} />
            </button>
          ))}
          <div>
            {footerItems.map((item) => (
              <button>
                <Icon icon={item} />
              </button>
            ))}
          </div>
        </div>
        <div class="sidebar-8-right">
          <div class="sidebar-8-right-inner">
            <Header />
            <nav>
              {innerItems.map((item) => (
                <Button item={item} />
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </section>
  );
};
