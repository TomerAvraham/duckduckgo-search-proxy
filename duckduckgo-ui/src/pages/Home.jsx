import React from "react";
import { PageContainer, Navbar, Sidebar} from "../layout"
import {Search, Pagination,QueryHistory, Highlight } from "../features"

const Home = () => {

  return (
    <>
    <Navbar>
      <Highlight/>
    </Navbar>
      <Sidebar > 
        <QueryHistory/>
      </Sidebar>
      <PageContainer>
          <Search />
          <Pagination/>
      </PageContainer>
  </>
  )
};

export default Home;
