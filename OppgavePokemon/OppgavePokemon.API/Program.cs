
using Microsoft.AspNetCore.Mvc;

namespace OppgavePokemon.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Server stuff under here
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            Game theGame = new Game();

            app.MapGet("/pokemons", (string pokemonName) =>
            {
                if (pokemonName == "Magikarp")
                {
                    return new JsonResult(theGame.Magikarp);
                }
                else
                {
                    return new JsonResult(theGame.GetPokemon(pokemonName));
                }
            });

            app.MapGet("/pokemons/attack", (string attacker, string opponent) =>
            {
                if (attacker == "Magikarp")
                {
                    var opponentPokemon = theGame.GetPokemon(opponent);
                    var (move, strength) = theGame.Magikarp.Attack(opponentPokemon);
                    return new { move, strength };
                }
                else
                {
                    var attackerPokemon = theGame.GetPokemon(attacker);
                    var (move, strength) = attackerPokemon.Attack(theGame.Magikarp);
                    return new { move, strength };
                }
            });

            app.MapGet("/pokemons/reset", () =>
            {
                theGame = new Game();
            });

            app.Run();
        }
    }
}