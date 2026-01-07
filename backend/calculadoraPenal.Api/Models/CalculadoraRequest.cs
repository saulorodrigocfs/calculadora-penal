namespace CalculadoraPenal.Api.Models;

public class CalculadoraRequest
{
    public int PenaMin { get; set; }
    public int PenaMax { get; set; }
    public int PenaAplicada { get; set; }
    public int DiasMin { get; set; }
    public int DiasMax { get; set; }
}
