(function () {
    const listElements = document.querySelectorAll('.menu__item');
    const list = document.querySelector('.newNavBar-nav');
    const menu = document.querySelector('.menu__hamburguer');

    window.addEventListener("resize", showInfo);
    function showInfo() {
        //if (window.innerWidth > 1148) {
        //    document.getElementById("idMenuTienda").classList.remove("newNavBarDevice");
        //    document.getElementById("idMenuTienda").removeAttribute("style");
        //    var pathname = window.location.pathname;
        //    if (pathname == "/MisComprasV2.aspx" || pathname == "/tiendasn.aspx") {
        //        document.getElementById("idMenuTienda").style.color = "white";
        //        document.getElementById("idMenuTienda").style.borderBottom = "3px solid white";
        //    }
        //    document.getElementById("idMenuTienda").nextElementSibling.removeAttribute("style");

        //    document.getElementById("idMenuRed").classList.remove("newNavBarDevice");
        //    document.getElementById("idMenuRed").removeAttribute("style");
        //    if (pathname == "/MapaDePatrocinio.aspx" || pathname == "/MapaRedSocios.aspx" || pathname == "/TablaCalificacion.aspx" || pathname == "/CompletarPregistro.aspx") {
        //        document.getElementById("idMenuRed").style.color = "white";
        //        document.getElementById("idMenuRed").style.borderBottom = "3px solid white";
        //    }
        //    document.getElementById("idMenuRed").nextElementSibling.removeAttribute("style");

        //    document.getElementById("idMenuDocumentos").classList.remove("newNavBarDevice");
        //    document.getElementById("idMenuDocumentos").removeAttribute("style");
        //    if (pathname == "/Documentos.aspx" || pathname == "/Promociones.aspx") {
        //        document.getElementById("idMenuDocumentos").style.color = "white";
        //        document.getElementById("idMenuDocumentos").style.borderBottom = "3px solid white";
        //    }            
        //    document.getElementById("idMenuDocumentos").nextElementSibling.removeAttribute("style");

        //    //console.log("entré en resize mayor a 1148");
        //} else {
        //    document.getElementById("idMenuTienda").classList.add("newNavBarDevice");
        //    document.getElementById("idMenuDocumentos").classList.add("newNavBarDevice");
        //    document.getElementById("idMenuRed").classList.add("newNavBarDevice");
        //    //console.log("entré en resize menor a 1148");
        //}
    }

    //const addResize = () => {
    //    listElements.forEach(element => {
    //        element.addEventListener('resize', () => {
    //            let img = element.children[0];
    //            let a = element.children[1];
    //            a.style.background = "#FFA56C";
    //            a.removeAttribute("style");
    //            img.removeAttribute("style");
    //            a.children[0].removeAttribute("style");
    //            a.classList.toggle("newNavBarDevice");
    //            console.log("entré en resize");
    //        });
    //    });
    //}

    //addResize();

    const addClick = () => {
        listElements.forEach(element => {
            element.addEventListener('click', () => {
                //var navtienda2 = document.getElementById('navtienda2');                
                //var navDesplegable = document.getElementById('navDesplegable');                
                //var navDocumentos = document.getElementById('navDocumentos'); 

                //element.classList.toggle('menu__item--active');
                /* Aumentar la altura */
                if (window.innerWidth <= 1148) {
                    let img = element.children[0];
                    let a = element.children[1];
                    let subMenu = element.children[2];
                    let height = 0;
                    if (subMenu.clientHeight === 0) {
                        height = subMenu.scrollHeight;
                    }
                    //console.log("height: " + height);
                    subMenu.style.height = `${height}px`;
                    if (height !== 0) {
                        //console.log('entré en altura distinto a 0')
                        //console.log('el font-weight a son: ' + a.style.fontWeight);
                        if (a.style.fontWeight == 700) {
                            a.removeAttribute("style");
                            //console.log('entré en font-weight igual a 700');
                            //console.log('______________________');
                            a.style.background = "#FFA56C";//color background anaranjado
                            a.style.setProperty("color", "white", "important");
                            //a.style.fontWeight = "700";
                            img.removeAttribute("style");
                            a.children[0].removeAttribute("style");
                        }
                        else {
                            //console.log('entré en font-weight distinto a 700');
                            //console.log('_______________________');
                            a.removeAttribute("style");
                            a.children[0].removeAttribute("style");
                            img.removeAttribute("style");
                        }
                        //a.children[0].style = "#153285"
                        //console.log('entré en altura distinto de 0')
                    }
                    else {
                        //console.log('entré en altura igual a 0')
                        //console.log('____________________________')
                        a.removeAttribute("style");
                        a.style.background = "white";
                        //a.style.fontWeight = "700";
                        //a.style.color = "#212121";
                        a.style.setProperty("color", "#212121", "important");//color texto negruzco
                        //a.children[0].style.color = "#153285";
                        a.children[0].style.setProperty("color", "var(--Primary-green)", "important");//color medio azulado
                        img.style.filter = "none";
                    }

                    //if (navtienda2.classList.contains('menu__item--active')) {
                    //    console.log("entré en COMPRAS");
                    //    navDesplegable.classList.toggle('menu__item--active');
                    //    navDocumentos.classList.toggle('menu__item--active');

                    //} if (navDesplegable.classList.contains('menu__item--active')) {
                    //    console.log("entré en RED");
                    //    navtienda2.classList.toggle('menu__item--active');
                    //    navDocumentos.classList.toggle('menu__item--active');

                    //} if (navDocumentos.classList.contains('menu__item--active')) {
                    //    console.log("entré en INFORMACION");
                    //    navtienda2.classList.toggle('menu__item--active');
                    //    navDesplegable.classList.toggle('menu__item--active');
                    //}
                }
            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element => {
            //if (element.children[2].getAttribute("style")) {
            //    element.children[2].removeAttribute("style");
            //    element.classList.remove("menu__item--active");
            //}
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1119) {
            deleteStyleHeight();
        } else {
            addClick();
        }
    });

    if (window.innerWidth <= 1119) {
        addClick();
    }

    menu.addEventListener('click', () => list.classList.toggle('menu__links--show'));


})();

