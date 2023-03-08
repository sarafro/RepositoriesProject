using Newtonsoft.Json;

namespace WebApi.Entities;

public class Repository
{
    public int Id { get; set; }
    public string Full_name { get; set; }
    public string Html_url { get; set; }
    public Owner Owner { get; set; }
}
public class Owner
{
    public string Avatar_url { get; set; }
}
public class Root { 
    public int Total_count { get; set; }
    public bool Incomplete_results { get; set; }
    public List<Repository> items { get; set; }
}

