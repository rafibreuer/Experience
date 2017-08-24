
package bike;

/**
 *
 * @author Breuer
 */
public class RidingCourse extends Bike
{
   protected double roads;
   protected double hills;
   protected double offRds;

    public RidingCourse(double roads, double hills, double offRds)
    {
        this.roads = roads;
        this.hills = hills;
        this.offRds = offRds;
    }

   
}
