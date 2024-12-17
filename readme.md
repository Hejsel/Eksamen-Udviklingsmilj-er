# **Introduktion til Git og samarbejde i fællesprojekter**

Git er et **versionsstyringssystem**, der gør det muligt at holde styr på ændringer i filer og samarbejde effektivt i projekter. I denne README gennemgås:

- Grundlæggende Git-kommandoer
- Arbejdsgange til samarbejde (branching, merging, konflikthåndtering)
- Bedste praksis til fællesprojekter

---

## **Indhold**

1. [Opsætning af Git](#opsætning-af-git)
2. [Basis Git-kommandoer](#basis-git-kommandoer)
3. [Branching og merging](#branching-og-merging)
4. [Samarbejde i fællesprojekter](#samarbejde-i-fællesprojekter)
5. [Konflikthåndtering](#konflikthåndtering)
6. [Bedste praksis](#bedste-praksis)

---

## **1. Opsætning af Git**

Start med at installere Git på din maskine:

- [Download Git](https://git-scm.com/)

### **Konfigurer din identitet**

Opsæt dit navn og e-mail, som bruges i commits:

```bash
git config --global user.name "Dit Navn"
git config --global user.email "din.email@example.com"
```

Tjek dine Git-indstillinger:

```bash
git config --list
```

---

## **2. Basis Git-kommandoer**

| **Kommando**             | **Beskrivelse**                         |
| ------------------------ | --------------------------------------- |
| `git init`               | Initialiserer et nyt Git repository.    |
| `git status`             | Viser status for ændringer i projektet. |
| `git add <filnavn>`      | Tilføjer en fil til staging.            |
| `git add .`              | Tilføjer alle ændrede filer.            |
| `git commit -m "Besked"` | Committer ændringer med en besked.      |
| `git log`                | Viser historik for commits.             |
| `git diff`               | Viser forskellen mellem ændringer.      |
| `git clone <repo-URL>`   | Kloner et eksternt repository.          |
| `git pull`               | Henter og merger ændringer fra remote.  |
| `git push`               | Sender ændringer til remote repository. |

---

## **3. Branching og merging**

### **Opret og skift branch**

En branch er en separat "arbejdskopi" af projektet:

```bash
git branch <branch-navn>     # Opret en ny branch
git checkout <branch-navn>   # Skift til en eksisterende branch
git checkout -b <branch-navn>  # Opret og skift til ny branch
```

### **Merge en branch**

For at integrere en branch i `main` (eller en anden branch):

```bash
git checkout main            # Skift til main
git merge <branch-navn>      # Flet branch ind i main
```

### **Slet en branch**

Efter en branch er flettet:

```bash
git branch -d <branch-navn>  # Slet branch lokalt
git push origin --delete <branch-navn>  # Slet branch på remote
```

---

## **4. Samarbejde i fællesprojekter**

### **1. Klon projektet**

For at hente et fællesprojekt:

```bash
git clone <repo-URL>
```

### **2. Opret en ny branch**

Når du starter på en ny opgave, lav en ny branch:

```bash
git checkout -b feature/<navn-på-opgave>
```

### **3. Commit og push ændringer**

1. Tilføj ændringer til staging og commit:

   ```bash
   git add .
   git commit -m "Tilføjede ny funktionalitet"
   ```

2. Send din branch til remote repository:
   ```bash
   git push origin feature/<navn-på-opgave>
   ```

### **4. Lav en Pull Request (PR)**

Opret en **Pull Request** i GitHub/GitLab for at få feedback og flette din branch.

### **5. Opdater din branch**

Hent ændringer fra remote og integrér dem i din branch:

```bash
git pull origin main         # Hent opdateringer fra main
git merge main               # Flet main ind i din branch
```

---

## **5. Konflikthåndtering**

### **Sådan håndterer du en konflikt**

Hvis der opstår en konflikt, når du merger:

1. Git markerer konflikter i filerne.
2. Åbn filen og løs konflikten manuelt.
3. Når konflikten er løst:
   ```bash
   git add <filnavn>
   git commit -m "Løst konflikt i <filnavn>"
   ```

### **Tips til konflikthåndtering**

- Kommunikér med dit team.
- Hold din branch opdateret ved at hente ændringer ofte:
  ```bash
  git pull origin main
  ```

---

## **6. Bedste praksis**

1. **Brug branches**: Lav separate branches for hver opgave/feature.
2. **Commit ofte**: Lav små, men meningsfulde commits med klare beskeder.
3. **Skriv gode commit-beskeder**:
   - **Eksempel**: `Tilføjede validering til login-formular`
4. **Hold din branch opdateret**:
   ```bash
   git pull origin main
   ```
5. **Undgå at committe store filer**: Brug en `.gitignore`-fil til at ekskludere uønskede filer.

**Eksempel på `.gitignore`:**

```
node_modules/
.DS_Store
*.log
.env
```

6. **Review kode før merge**: Brug Pull Requests og giv feedback til dit team.
7. **Kommunikér med teamet**: Hold styr på, hvem der arbejder på hvad.

---

## **Konklusion**

Denne README giver dig en grundlæggende guide til at bruge Git effektivt i både solo- og fællesprojekter. Følg de beskrevne kommandoer og bedste praksis for at få et struktureret og problemfrit samarbejde.

For mere avanceret brug af Git, tjek [officiel Git dokumentation](https://git-scm.com/doc). 🚀
