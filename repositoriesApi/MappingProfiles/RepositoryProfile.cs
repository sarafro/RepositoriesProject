using AutoMapper;
using WebApi.Entities;
using WebApi.Models;

namespace WebApi.MappingProfiles;

public class RepositoryProfile : Profile
{
    public RepositoryProfile()
    {
        CreateMap<Repository, RepositoryResponse>().ForMember(dest => dest.Avatar_url, opt => opt.MapFrom(m => m.Owner.Avatar_url));
    }
}
