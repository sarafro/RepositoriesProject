namespace WebApi.Models;

using WebApi.Entities;

public class RepositoryResponse
{
    public int Id { get; set; }
    public string Full_name { get; set; }
    public string Html_url { get; set; }
    public string Avatar_url { get; set; }
}