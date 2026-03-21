((nil . ((eval . (prettier-js-mode 0))
         (eval . (add-node-modules-path))
         (eval . (biomejs-format-mode 1))
         (web-mode-css-indent-offset . 2)
         (eval .
               (defun kshell/astro-server ()
                 (interactive)
                 (khalid/project-run-async-shell-command "pnpm dev" "*kshell-server*" nil (project-current nil "."))))
         
         (khalid/project-commands . (kshell/astro-server))

         (khalid/project-local-url . "http://localhost:4321")

         (eval .
               (defun kshell/deploy ()
                 (interactive)
                 (khalid/project-run-async-shell-command "pnpm run deploy" "*kshell-deploy*")))

         (khalid/project-deploy-command . kshell/deploy)
         
         (eval .
               (khalid/set-project-command-keybindings)))))
