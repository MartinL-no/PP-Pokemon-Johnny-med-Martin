using System;

namespace OppgavePokemon
{
    public class Bulbosaur: Pokemon
    {
        public Bulbosaur() : base(32, "Bulbosaur")
        {
        }
        public override (string move, int strength) Attack(Pokemon pokemon)
        {
            return VineWhip(pokemon);
        }

        public (string move, int strength) VineWhip(Pokemon pokemon)
        {
            pokemon.LooseHealth(6);
            return new ("Vine Whip", 6);
        }
    }
}