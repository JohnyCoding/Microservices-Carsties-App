using AuctionService.Entities;

namespace AuctionService.UnitTests;

public class AuctionEntityTests
{
    // MethodName_Scenario_ExpectedResult
    [Fact]
    public void HasReservePrice_ReservePriceGtZero_True()
    {
        // arrange
        var auction = new Auction { Id = Guid.NewGuid(), ReservePrice = 10 };

        // act
        var result = auction.HasReservePrice();

        // assert
        Assert.True(result);
    }

    [Fact]
    public void HasReservePrice_ReservePriceIsZero_False()
    {
        var auction = new Auction { Id = Guid.NewGuid(), ReservePrice = 0 };
        var result = auction.HasReservePrice();
        Assert.False(result);
    }
}
