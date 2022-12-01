// import logo from './logo.svg';
import './App.scss';
import Navebar from './components/navbar/Navbar'



export default function App() {
  const navSetup = {
    "theme_dark": false,
    "expand": "md",
    "brand": "Navbar-2",
    "items": [
      {
        "name": "Link1",
        "href": "/link1"
      },
      {
        "name": "Link2",
        "href": "/link2"
      },
      [
        "dropdown",
        {
          "name": "drop1",
          "href": "/drop1"
        },
        {
          "name": "drop1",
          "href": "/drop1"
        },
        {
          "name": "drop1",
          "href": "/drop1"
        }
      ]
    ],
    "login": true,
    "extra": {
      "name": "Cart",
      "href": "#cart"
    }
  };

  return <>
    <Navebar Set={navSetup} />
    <div className="text-center">App</div>
  </>
}

