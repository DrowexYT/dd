<?php

class Kalkulacka
{
    public $prvniCislo;
    public $druheCislo;
    public $operace;
    public $chyba = 'Nulou nelze dělit ty negramote!';

    public function __construct($prvniCislo, $druheCislo, $operace)
    {
        $this->prvniCislo = $prvniCislo;
        $this->druheCislo = $druheCislo;
        $this->operace = $operace;
    }

    public function vypocitej()
    {
        if ($this->operace == 'scitani')
        {
            $vysledek = $this->prvniCislo + $this->druheCislo;
            return $vysledek;
        }
        else if ($this->operace == 'odcitani')
        {
            $vysledek = $this->prvniCislo - $this->druheCislo;
            return $vysledek;
        }
        else if ($this->operace == 'nasobeni')
        {
            $vysledek = $this->prvniCislo * $this->druheCislo;
            return $vysledek;
        }
        else if ($this->operace == 'deleni')
        {
            if ($this->druheCislo != 0)
            {
                $vysledek = $this->prvniCislo / $this->druheCislo;
                return $vysledek;
            }
            else
            {
                return $this->chyba;
            }
        }
    }
}