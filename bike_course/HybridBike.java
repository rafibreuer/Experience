package bike;

/**
 *
 * @author Breuer
 */
public class HybridBike extends Bike
{

    public HybridBike()
    {
        this.tireSize = "medium";
        this.roadSpeed = 20;
        this.offRdSpeed = 23;
        this.hillSpeed = 18;
    }

    public String toString()
    {
        String rv = "Hybrid Bike";
        rv += super.toString();

        return rv;
    }
}
