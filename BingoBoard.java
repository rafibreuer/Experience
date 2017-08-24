
/**
 *
 *
 * @author Breuer
 */
public class BingoBoard
{

    public static String[] names =
    {
        "jack", "jill", "john"
    };
    public static int[][][] cards = new int[3][5][5];

    // method for not repeating random
    public static int noDouble()
    {
        //r is random number ready 
        int r = (int) (Math.random() * 75 + 1);
        //cant get it till i check every slot if has it yet
        for (int i = 0; i < cards.length; i++)
        {
            for (int j = 0; j < cards[i].length; j++)
            {
                for (int k = 0; k < cards[i][j].length; k++)
                {
                    if (cards[i][j][k] == r)
                    {
                        return noDouble();
                    }
                }
            }
        }
        return r;
    }

    public static void multipleCards()
    {
        for (int i = 0; i < cards.length; i++)
        {
            for (int j = 0; j < cards[i].length; j++)
            {
                for (int k = 0; k < cards[i][j].length; k++)
                {
                    cards[i][j][k] = noDouble();                  
                }
            }
            cards[i][2][2] = 0;
        }       
    }

    public static void printBingo()
    {
        char[] title = new char[]
        {
            'O', 'G', 'N', 'I', 'B'
        };

        for (int i = title.length-1; i >= 0; i--)
        {
            System.out.print(title[i] + "\t");
        }
        {
            System.out.println();
        }
    }
    public static void printCards(int[][][] cards)
    {
        int n = 0;

        for (int i = 0; i < cards.length; i++)
        {
            System.out.println("name:" + names[n++]);
            printBingo();
            for (int j = 0; j < cards[i].length; j++)
            {
                for (int k = 0; k < cards[i][j].length; k++)
                {
                    System.out.print(cards[i][j][k] + "\t");
                }
                System.out.println();
            }
            System.out.println();
        }
    }

    public static void main(String[] args)
    {
        multipleCards();
        printCards(cards);
    }
}
