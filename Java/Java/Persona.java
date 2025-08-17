public class Persona {
    private String nombre;
    private String apellido;
    private int edad;
    private String [] tecnologias;
    private Boolean  esEstudiante;
    Carrera carrera;

    public Persona (String nombre, String apellido, int edad,String nombreCarrera, int duracionCarrera,boolean estaEnCurso){
        carrera = new Carrera(nombreCarrera,duracionCarrera,estaEnCurso);
        this.nombre = nombre;
        this.apellido =apellido;
        this.edad = edad;

    }   

    public String returnFuName(){
        return nombre + " " + apellido;
    }

    public int returnEdad(){
        return edad;
    }

    public boolean esEstudiante (){
        return esEstudiante;
    }
    public String [] returnTecnologias(){
        return tecnologias;
    }
}
