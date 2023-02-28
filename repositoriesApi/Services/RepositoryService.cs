namespace WebApi.Services;

using System.Text.Json;
using WebApi.Entities;

public interface IRepositoryService
{
    List<Repository> SearchRepositories(string query);
}

public class RepositoryService : IRepositoryService
{
    public List<Repository> SearchRepositories(string query)
    {
        List<Repository> deserializedData;
        string path = System.IO.Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "DataRepo.json");
        string jsonString = File.ReadAllText(path);
        deserializedData = JsonSerializer.Deserialize<List<Repository>>(jsonString);
        deserializedData = deserializedData.FindAll(res => res.FullName.Contains(query));
        return deserializedData;
    }
}
