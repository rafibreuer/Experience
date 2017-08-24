package bike;

/**
 *
 * @author Breuer
 */
public class BikeSimulator extends Bike
{

    public static void main(String[] args)
    {
        //checking equals method
        MountainBike mb = new MountainBike();
        MountainBike mb1 = new MountainBike();
        System.out.println(mb.equals(mb1)); 
        //making arrays printing bikes taking each one through course
        Bike[] course = new Bike[]
        {
            new RidingCourse(1, 2, 3), new RidingCourse(3, 2, 1), new RidingCourse(2, 3, 1)
        };
        Bike[] bikes = new Bike[]
        {
            new MountainBike(), new RoadBike(), new HybridBike()
        };
        for (Bike bike : bikes)
        {
            System.out.println(bike.toString());
            for (int j = 0; j < course.length; j++)
            {
                System.out.println("on course " + (j + 1) + " it takes: " + bike.getTotalTime((RidingCourse) course[j]) + " minutes");
            }
        }
    }
}
