namespace CalculadoraPenal.Api.Services;

public class CalculadoraService
{
    public int CalcularDiasMulta(
        int penaMin,
        int penaMax,
        int penaAplicada,
        int diasMin,
        int diasMax
    )
    {
        if (penaMax == penaMin)
            return diasMin;
        return (diasMax - diasMin)
                * (penaAplicada - penaMin)
                / (penaMax - penaMin)
                + diasMin;
    }
}
