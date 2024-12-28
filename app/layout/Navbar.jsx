import React from 'react';
// -------------------- Navbar Sections: start --------------------
import Header from '../components/navbar/Header';
import Search from '../components/navbar/Search';
// -------------------- Navbar Sections: start --------------------

const Navbar = () => {
  return (
    <div>
        {/** -------------------- Header: start -------------------- */}
        <section>
          <Header />
        </section>
        {/** -------------------- Header: end -------------------- */}
        {/** -------------------- Search Section: start -------------------- */}
        <section>
          <Search />
        </section>
        {/** -------------------- Search Section: end -------------------- */}
    </div>
  )
}

export default Navbar;