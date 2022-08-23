import React from "react";
import { Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

const Navigation = ({ menu }) => (
 
    <nav className="mainmenu text-center">
      <ul>
        {menu.map((mainItem) =>
          !mainItem.parentId ? (
            <li key={mainItem.id}>
              <Link to={mainItem.url} activeClassName="nav-active">
                {mainItem.label}
                {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
              </Link>
              {mainItem.childItems.nodes.length !== 0 ? (
                <ul className="sub-menu">
                  {mainItem.childItems.node.map((childItem) => (
                    <Link to={childItem.url} activeClassName="nav-active">
                      {" "}
                      {childItem.label}
                    </Link>
                  ))}
                </ul>
              ) : null}
            </li>
          ) : null
        )}
      </ul>
    </nav>
);

export default Navigation;
