using System;

namespace OppgavePokemon
{
    public class Magikarp : Pokemon
    {
        public readonly bool IsUseless;

        public Magikarp() : base(30, "Magikarp")
        {
            IsUseless = true;
        }
        public override (string move, int strength) Attack(Pokemon pokemon)
        {
            return Splash(pokemon);
        }

        private (string move, int strength) Splash(Pokemon pokemon)
        {
            pokemon.LooseHealth(0);
            return ("Splash", 0);
        }
    }
}
