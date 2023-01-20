using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;
using System.Text.Json.Nodes;

var myCors = "_mycors";
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myCors,
                      policy =>
                      {
                          policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                      });
});

// Add services to the container.

var app = builder.Build();
app.UseCors(myCors);


var summaries = new[]
{
    "Freezing"
};

List<string> posts = new List<string>();

app.MapGet("/texto-post", () =>
{
    return posts;
});

app.MapPost("/texto-new-post", ([FromBody] object json) =>
{
    posts.Add(json.ToString());
    return posts;
    //return new StringContent(JsonConvert.SerializeObject(json), Encoding.UTF8, "application/json");
});


app.Run();

internal record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}