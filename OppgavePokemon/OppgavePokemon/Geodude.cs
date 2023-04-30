using System;

namespace OppgavePokemon
{
    public class Geodude: Pokemon
    {
        public Geodude() : base(40, "Geodude")
        {
        }
        public override (string move, int strength) Attack(Pokemon pokemon)
        {
            return RockThrow(pokemon);
        }
        public (string move, int strength) RockThrow(Pokemon pokemon)
        {
            pokemon.LooseHealth(10);
            return new ("Rock Throw", 10);
        }
    }
}