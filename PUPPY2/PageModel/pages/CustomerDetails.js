import { Selector } from 'testcafe'
import { t } from 'testcafe'

class CustomerDetails{
    constructor(){
        this.Name = Selector('#order_name')
        this.Address = Selector('#order_address')
        this.Email = Selector('#order_email')
        this.OrderPay = Selector('#order_pay_type')
        this.PlaceOrder = Selector('input[value="Place Order"]')
        this.OrderPayCheck = Selector('#order_pay_type > option:nth-child(2)')
        this.OrderPayCreditCard = Selector('#order_pay_type > option:nth-child(3)')
        this.OrderPayPurchaseOrder = Selector('#order_pay_type > option:nth-child(4)')
    }

    PaywithCheck = async() =>{
        await t
            .typeText(this.Name, 'Miguel')
            .typeText(this.Address, 'Giralda 23')
            .typeText(this.Email, 'angel@mm.com')
            .click(this.OrderPay)
            .click(this.OrderPayCheck)
            .click(this.PlaceOrder)        
    }

    PaywithCreditCard = async() =>{
        await t
            .typeText(this.Name, 'Angel')
            .typeText(this.Address, 'Obsidiana 87')
            .typeText(this.Email, 'test@aa.com')
            .click(this.OrderPay)
            .click(this.OrderPayCreditCard)
            .click(this.PlaceOrder)        
    }

    PaywithPurchaseOrder = async() =>{
        await t
            .typeText(this.Name, 'Manuel')
            .typeText(this.Address, 'Plaza del sol')
            .typeText(this.Email, 'manual@aa.com')
            .click(this.OrderPay)
            .click(this.OrderPayPurchaseOrder)
            .click(this.PlaceOrder)        
    }

}export default new CustomerDetails();