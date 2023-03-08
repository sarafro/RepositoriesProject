using WebApi.Helpers;
using WebApi.Services;

var builder = WebApplication.CreateBuilder(args);
//builder.Services.AddControllers().AddJsonOptions(o => o.JsonSerializerOptions.);

// add services to DI container
{
    var services = builder.Services;
    services.AddCors();
    services.AddControllers();
    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


    // configure strongly typed settings object
    services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

    // configure DI for application services
    services.AddScoped<IUserService, UserService>();
    services.AddScoped<IRepositoryService, RepositoryService>();
}

var app = builder.Build();

// configure HTTP request pipeline
{
    // global cors policy
    app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());

    // custom jwt auth middleware
    app.UseMiddleware<JwtMiddleware>();

    app.MapControllers();
}

app.Run("http://localhost:4000");