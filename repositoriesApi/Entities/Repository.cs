using Newtonsoft.Json;

namespace WebApi.Entities;

public class Repository
{
    public int Id { get; set; }
    public string FullName { get; set; }
    public string HtmlUrl { get; set; }
    public string AvatarUrl { get; set; }
}

