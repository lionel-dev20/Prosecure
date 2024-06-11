"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../../utils/cn";
import Link from "next/link";

export function Navigation() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive} >

      <MenuItem setActive={setActive} active={active} item="Accueil">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Alarme anti-intrution</HoveredLink>
            <HoveredLink href="/">Contrôle d&apos; accès</HoveredLink>
            <HoveredLink href="/">Gestion de temps</HoveredLink>
            <HoveredLink href="/">Vidéosurveillance</HoveredLink>
            <HoveredLink href="/">Barriere electrique</HoveredLink>
            <HoveredLink href="/">Portail électrique</HoveredLink>
            <HoveredLink href="/">Gps tracking</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Produits" >
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Caméra vidéosurveillance"
              href=""
              src="/images/NavBarImg/Produit-camera-de-videosurveillance.webp"
              description="Produits de surveillance vidéo autonome ."
            />
            <ProductItem
              title="Equipement Alarme-incendie"
              href="/"
              src="/images/NavBarImg/Produit-alarme-incendie.webp"
              description="Installation des équipement anti-incendie"
            />
            <ProductItem
              title="Contrôle d'accès"
              href="/"
              src="/images/NavBarImg/Controleur-dacces.webp"
              description="Installation équipement de contrôle d'accès"
            />
            <ProductItem
              title="Autre matériel"
              href=""
              src="/images/NavBarImg/produit-gsp-tracking.webp"
              description="Nous fournissons tout le matériel nécéssaire à votre sécurité ."
            />
          </div>
        </MenuItem>

        <Link href="/">
        <MenuItem setActive={setActive} active={active} item="Réalisations">
        </MenuItem>
        </Link>

        <Link href="/">
        <MenuItem setActive={setActive} active={active} item="Partenaires">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
