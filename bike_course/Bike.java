package bike;

/**
 *
 * @author Breuer
 */
public abstract class Bike
{

    protected String tireSize;
    protected double roadSpeed;
    protected double hillSpeed;
    protected double offRdSpeed;

    public String toString()
    {
        return " has " + tireSize + " tires, rdspeed of " + roadSpeed + " ,offrd speed of " + offRdSpeed + " ,hill speed of " + hillSpeed;
    }

    public boolean equals(Object thing)
    {
        if (thing == null)
        {
            return false;
        }
        if (thing == this)
        {
            return true;
        }
        if (!(thing instanceof Bike))
        {
            return false;
        }
        Bike r = (Bike) thing;
        if (this.tireSize.equals(r.tireSize))
        {
            return true;
        }

        return false;
    }

    public double getTotalTime(RidingCourse dd)
    {
        double h = dd.hills / this.hillSpeed;
        double r = dd.roads / this.roadSpeed;
        double o = dd.hills / this.offRdSpeed;
        double time = (h + r + o)*60.0;
        return time;
    }
}
