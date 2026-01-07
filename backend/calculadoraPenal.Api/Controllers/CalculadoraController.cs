using Microsoft.AspNetCore.Mvc;
using CalculadoraPenal.Api.Models;
using CalculadoraPenal.Api.Services;

namespace CalculadoraPenal.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CalculadoraController : ControllerBase
{
    private readonly CalculadoraService _service;
    
    public CalculadoraController(CalculadoraService service)
    {
        _service = service;
    }

    [HttpPost("dias-multa")]
    public IActionResult Calcular([FromBody] CalculadoraRequest request)
    {
        var resultado = _service.CalcularDiasMulta(
            request.PenaMin,
            request.PenaMax,
            request.PenaAplicada,
            request.DiasMin,
            request.DiasMax
        );

        return Ok(new { diasMulta = resultado });
    }
}