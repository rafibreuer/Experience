package bike;

/**
 *
 * @author Breuer
 */
public class RoadBike extends Bike
{

    public RoadBike()
    {
        this.tireSize = "thin";
        this.roadSpeed = 25;
        this.offRdSpeed = 15;
        this.hillSpeed = 20;

    }

    public String toString()
    {
        String rv = "Road bike";
        rv += super.toString();

        return rv;
    }
}
