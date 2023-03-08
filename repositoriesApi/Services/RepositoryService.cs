namespace WebApi.Services;

using AutoMapper;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using WebApi.Entities;
using WebApi.Models;

public interface IRepositoryService
{
    Task<List<RepositoryResponse>> SearchRepositories(string query);
}

public class RepositoryService : IRepositoryService
{

    private readonly IMapper _mapper;

    public RepositoryService(IMapper mapper)
    {
        _mapper = mapper;
    }

    public async Task<List<RepositoryResponse>> SearchRepositories(string query)
    {
        using (HttpClient client = new HttpClient())
        {
            var productValue = new ProductInfoHeaderValue("Repositories", "1.0");
            client.DefaultRequestHeaders.UserAgent.Add(productValue);
            var response = await client.GetAsync("https://api.github.com/search/repositories?q=a");
            var body = await response.Content.ReadAsStringAsync();

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
            var root = JsonSerializer.Deserialize<Root>(body,options);

            List<Repository> repositories = root.items;
            return _mapper.Map<List<RepositoryResponse>>(repositories);
        }
    }
}