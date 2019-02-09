const email = "tsdc.agile.test@gmail.com", password = "GrupoAgiles";
const url = 'http://ec2-18-222-141-129.us-east-2.compute.amazonaws.com:8080/admin428l2esux';


describe('Acceso Administrativo Prestashop', function() {
    it('Ingresar a pagina de administración', function() {
        cy.visit(url)
        cy.contains('Iniciar sesión').click()
        cy.get('form#login_form').find('input[name="email"]').click().type(email)
        cy.get('form#login_form').find('input[name="passwd"]').click().type(password)
        cy.get('form#login_form').contains('Iniciar sesión').click()
        cy.get('.js-mobile-menu').click()
        cy.get('.link').contains('Clientes').click()
        cy.contains('Clientes')
        cy.get('li#subtab-AdminCustomers').find('a').click()
        cy.contains('Cerrar sesión').click({force:true})
    })
})