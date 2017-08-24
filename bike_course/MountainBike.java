package bike;

/**
 *
 * @author Breuer
 */
public class MountainBike extends Bike
{

    public MountainBike()
    {
        this.tireSize = "fat";
        this.roadSpeed = 20;
        this.offRdSpeed = 25;
        this.hillSpeed = 28;
    }

    public String toString()
    {
        String rv = "Mountain Bike";
        rv += super.toString();

        return rv;
    }

}
