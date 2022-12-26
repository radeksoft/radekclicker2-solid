import fileinput
import sys

a = r"""\begin{tikzpicture}
        \node (image) at (current page.center) {\includegraphics[width=0.975\textwidth]{pozvanka.png}};
        \node[text width=4cm, align=center] at (5.2,4.3) {\Huge CODE};
    \end{tikzpicture}
    \newpage
    %REPLACE
    """

codes = sys.argv[1:]

for code in codes:
    with fileinput.FileInput('./pozvanka.tex', inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace('%REPLACE', a.replace('CODE', code)), end='')