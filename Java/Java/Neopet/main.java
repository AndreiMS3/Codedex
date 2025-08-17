

public class Main {
  public static void main(String[] args) {
    Neopet gravatia = new Neopet();
    gravatia.name = "Gravatia";
    gravatia.species = "Eyrie";
    gravatia.color = "Blue";
    gravatia.gender = 'F';
    gravatia.hasScarf = false;

    System.out.println(gravatia.name);
    System.out.println(gravatia.gender);
    System.out.println("S: " + gravatia.strength);
    System.out.println("D: " + gravatia.defense);
    System.out.println("M: " + gravatia.movement);

  }
}
