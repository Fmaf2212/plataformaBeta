<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="OlvidasteTuContraseña.aspx.cs" Inherits="SantaNaturaNetwork.OlvidasteTuContraseña" ClientIDMode="Static" %>

<%@ OutputCache Location="None" NoStore="true" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Inicio de Sesión</title>

    <link rel="icon" href="img/Natural_Food_icon.png" type="image/x-icon" />
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <link href="css/bootstrap-sweetalert-master/sweetalert.css" rel="stylesheet"/>
    <script src="js/bootstrap-sweetalert-master/sweetalert.min.js" type="text/javascript"></script>
</head>
<body>


    <%--<form id="form1" runat="server">
        <asp:Button ID="Button1" CommandName="Login" onclick="btnIngresar_Click" runat="server" Text="Iniciar Sesión" CssClass="giris-yap-buton" />
    </form>--%>
    <form runat="server" style="align-content:center" >
        <img src="img/zeus.jpg" width="200"/>
        <br />
        <asp:Button runat="server" Style="width: 100px;margin-left:50px" Text="xxx" OnClick="Unnamed_Click"></asp:Button>
    </form>
   

    
<%--    <script src="js/AdminLTE/app.js"></script>
    <script src="js/sweetAlert.js" type="text/javascript"> </script>--%>

<%--    <script type="text/javascript">
        function alertLogin() {
            Swal.fire({
                title: 'Oooops !!',
                text: 'No ingreso correctamente sus datos',
                type: 'error'
            });
        }
    </script>--%>
</body>
</html>
