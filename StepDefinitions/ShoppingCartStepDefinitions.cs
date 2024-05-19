using System;
using TechTalk.SpecFlow;
using CalculatorApp;
using TechTalk.SpecFlow.Assist;
using NUnit.Framework;

namespace SpecFlowTest.StepDefinitions
{
    [Binding]
    public class ShoppingCartStepDefinitions
    {

        private readonly ShoppingCart _shoppingCart = new ShoppingCart();
        private decimal _totalPrice;

        [Given(@"the following items are in my shopping cart:")]
        public void GivenTheFollowingItemsAreInMyShoppingCart(Table table)
        {
            var itemLists = table.CreateSet<CartItem>();

            foreach (var item in itemLists)
            {
                _shoppingCart.AddItem(item.ItemName, item.Quantity, item.Price);
            }
        }

        [When(@"I calculate the total price")]
        public void WhenICalculateTheTotalPrice()
        {
            _totalPrice = _shoppingCart.CalculateTotalPrice();
        }

        [Then(@"the total price should be (.*)")]
        public void ThenTheTotalPriceShouldBe(int p0)
        {
            Assert.AreEqual(p0, _totalPrice);
        }

    }
}
