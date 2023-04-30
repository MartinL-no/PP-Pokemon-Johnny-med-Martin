using System;

namespace OppgavePokemon
{
    public class Pikachu: Pokemon
    {
        public Pikachu() : base(35, "Pikachu")
        {
        }

        public override (string move, int strength) Attack(Pokemon pokemon)
        {
            return ThunderShock(pokemon);
        }
        public (string move, int strength) ThunderShock(Pokemon pokemon)
        {
            pokemon.LooseHealth(8);
            return new ("Thunder Shock", 8);
        }
    }
}