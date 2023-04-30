using System;

namespace OppgavePokemon
{
    public abstract class Pokemon
    {
        public string Name { get; }
        public int Health { get; private set; }

        public Pokemon(int health, string name)
        {
            Health = health;
            Name = name;
        }

        public abstract (string move, int strength) Attack(Pokemon pokemon);

        public void LooseHealth(int lostHealth)
        {
            Health = Health- lostHealth < 0 ? 0 : Health- lostHealth;
        }
    }
}