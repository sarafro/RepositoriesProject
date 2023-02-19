namespace WebApi.Controllers;

using Microsoft.AspNetCore.Mvc;
using WebApi.Helpers;
using WebApi.Models;
using WebApi.Services;

[ApiController]
[Route("search")]
public class RepositoryController : ControllerBase
{
    private IRepositoryService _repositoryService;
    public RepositoryController(IRepositoryService repositoryService)
    {
        _repositoryService = repositoryService;
    }
    
 [HttpGet("repositories")]
    public IActionResult SearchRepositories(string query)
    {
        if(string.IsNullOrEmpty(query))
            return NotFound();
        var response = _repositoryService.SearchRepositories(query);

        return Ok(response);
    }
}