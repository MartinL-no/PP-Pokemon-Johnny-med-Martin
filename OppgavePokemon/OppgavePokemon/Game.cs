using System;

namespace OppgavePokemon
{
    public class Game
    {
        public Magikarp Magikarp { get; private set; }
        public List<Pokemon> WildPokemon { get; set; }

        public Game()
        {
            Magikarp = new Magikarp();
            WildPokemon = new List<Pokemon>()
            {
                new Bulbosaur(),
                new Geodude(),
                new Pikachu()
            };
        }

        public void Start()
        {
            var isMagikarpsTurn = true;

            while (true)
            {
                var pokemon = GetWildPokemon(WildPokemon);

                if (isMagikarpsTurn)
                {
                    Magikarp.Attack(pokemon);
                    Console.WriteLine($"{Magikarp.Name} attacked {pokemon.Name}, {pokemon.Name}'s health is now {pokemon.Health} ");
                }
                else
                {
                    pokemon.Attack(pokemon);
                    Console.WriteLine($"{pokemon.Name} attacked {Magikarp.Name}, {Magikarp.Name}'s health is now {Magikarp.Health} ");
                }

                if (Magikarp.Health == 0 || pokemon.Health == 0)
                {
                    ShowWinner(Magikarp, pokemon);
                    break;
                }
                isMagikarpsTurn = !isMagikarpsTurn;
            }
        }
        public void ShowWinner(Magikarp magikarp, Pokemon pokemon)
        {
            if (magikarp.Health == 0) Console.WriteLine("Magikarp won the battle");

            else Console.WriteLine($"{pokemon.Name} won");
        }

        public Pokemon GetWildPokemon(List<Pokemon> wildPokemon)
        {
            var rand = new Random();
            var index = rand.Next(wildPokemon.Count);
            
            return wildPokemon[index];
        }
        public Pokemon GetPokemon(string pokemonName)
        {
            return WildPokemon.FirstOrDefault(p => p.Name == pokemonName);

        }
    }
}
