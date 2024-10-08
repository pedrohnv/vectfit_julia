var documenterSearchIndex = {"docs":
[{"location":"91-developer/#dev_docs","page":"Developer documentation","title":"Developer documentation","text":"","category":"section"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"note: Contributing guidelines\nIf you haven't, please read the Contributing guidelines first.","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"If you want to make contributions to this package that involves code, then this guide is for you.","category":"page"},{"location":"91-developer/#First-time-clone","page":"Developer documentation","title":"First time clone","text":"","category":"section"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"tip: If you have writing rights\nIf you have writing rights, you don't have to fork. Instead, simply clone and skip ahead. Whenever upstream is mentioned, use origin instead.","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"If this is the first time you work with this repository, follow the instructions below to clone the repository.","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"Fork this repo\nClone your repo (this will create a git remote called origin)\nAdd this repo as a remote:\ngit remote add upstream https://github.com/pedrohnv/RationalVectorFitting.jl","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"This will ensure that you have two remotes in your git: origin and upstream. You will create branches and push to origin, and you will fetch and update your local main branch from upstream.","category":"page"},{"location":"91-developer/#Linting-and-formatting","page":"Developer documentation","title":"Linting and formatting","text":"","category":"section"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"Install a plugin on your editor to use EditorConfig. This will ensure that your editor is configured with important formatting settings.","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"We use https://pre-commit.com to run the linters and formatters. In particular, the Julia code is formatted using JuliaFormatter.jl, so please install it globally first:","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"julia> # Press ]\npkg> activate\npkg> add JuliaFormatter","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"To install pre-commit, we recommend using pipx as follows:","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"# Install pipx following the link\npipx install pre-commit","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"With pre-commit installed, activate it as a pre-commit hook:","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"pre-commit install","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"To run the linting and formatting manually, enter the command below:","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"pre-commit run -a","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"Now, you can only commit if all the pre-commit tests pass.","category":"page"},{"location":"91-developer/#Testing","page":"Developer documentation","title":"Testing","text":"","category":"section"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"As with most Julia packages, you can just open Julia in the repository folder, activate the environment, and run test:","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"julia> # press ]\npkg> activate .\npkg> test","category":"page"},{"location":"91-developer/#Working-on-a-new-issue","page":"Developer documentation","title":"Working on a new issue","text":"","category":"section"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"We try to keep a linear history in this repo, so it is important to keep your branches up-to-date.","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"Fetch from the remote and fast-forward your local main\ngit fetch upstream\ngit switch main\ngit merge --ff-only upstream/main\nBranch from main to address the issue (see below for naming)\ngit switch -c 42-add-answer-universe\nPush the new local branch to your personal remote repository\ngit push -u origin 42-add-answer-universe\nCreate a pull request to merge your remote branch into the org main.","category":"page"},{"location":"91-developer/#Branch-naming","page":"Developer documentation","title":"Branch naming","text":"","category":"section"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"If there is an associated issue, add the issue number.\nIf there is no associated issue, and the changes are small, add a prefix such as \"typo\", \"hotfix\", \"small-refactor\", according to the type of update.\nIf the changes are not small and there is no associated issue, then create the issue first, so we can properly discuss the changes.\nUse dash separated imperative wording related to the issue (e.g., 14-add-tests, 15-fix-model, 16-remove-obsolete-files).","category":"page"},{"location":"91-developer/#Commit-message","page":"Developer documentation","title":"Commit message","text":"","category":"section"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"Use imperative or present tense, for instance: Add feature or Fix bug.\nHave informative titles.\nWhen necessary, add a body with details.\nIf there are breaking changes, add the information to the commit message.","category":"page"},{"location":"91-developer/#Before-creating-a-pull-request","page":"Developer documentation","title":"Before creating a pull request","text":"","category":"section"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"tip: Atomic git commits\nTry to create \"atomic git commits\" (recommended reading: The Utopic Git History).","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"Make sure the tests pass.\nMake sure the pre-commit tests pass.\nFetch any main updates from upstream and rebase your branch, if necessary:\ngit fetch upstream\ngit rebase upstream/main BRANCH_NAME\nThen you can open a pull request and work with the reviewer to address any issues.","category":"page"},{"location":"91-developer/#Building-and-viewing-the-documentation-locally","page":"Developer documentation","title":"Building and viewing the documentation locally","text":"","category":"section"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"Following the latest suggestions, we recommend using LiveServer to build the documentation. Here is how you do it:","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"Run julia --project=docs to open Julia in the environment of the docs.\nIf this is the first time building the docs\nPress ] to enter pkg mode\nRun pkg> dev . to use the development version of your package\nPress backspace to leave pkg mode\nRun julia> using LiveServer\nRun julia> servedocs()","category":"page"},{"location":"91-developer/#Making-a-new-release","page":"Developer documentation","title":"Making a new release","text":"","category":"section"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"To create a new release, you can follow these simple steps:","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"Create a branch release-x.y.z\nUpdate version in Project.toml\nUpdate the CHANGELOG.md:\nRename the section \"Unreleased\" to \"[x.y.z] - yyyy-mm-dd\" (i.e., version under brackets, dash, and date in ISO format)\nAdd a new section on top of it named \"Unreleased\"\nAdd a new link in the bottom for version \"x.y.z\"\nChange the \"[unreleased]\" link to use the latest version - end of line, vx.y.z ... HEAD.\nCreate a commit \"Release vx.y.z\", push, create a PR, wait for it to pass, merge the PR.\nGo back to main screen and click on the latest commit (link: https://github.com/pedrohnv/RationalVectorFitting.jl/commit/main)\nAt the bottom, write @JuliaRegistrator register","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"After that, you only need to wait and verify:","category":"page"},{"location":"91-developer/","page":"Developer documentation","title":"Developer documentation","text":"Wait for the bot to comment (should take < 1m) with a link to a RP to the registry\nFollow the link and wait for a comment on the auto-merge\nThe comment should said all is well and auto-merge should occur shortly\nAfter the merge happens, TagBot will trigger and create a new GitHub tag. Check on https://github.com/pedrohnv/RationalVectorFitting.jl/releases\nAfter the release is create, a \"docs\" GitHub action will start for the tag.\nAfter it passes, a deploy action will run.\nAfter that runs, the stable docs should be updated. Check them and look for the version number.","category":"page"},{"location":"95-reference/#reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"95-reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"95-reference/","page":"Reference","title":"Reference","text":"Pages = [\"95-reference.md\"]","category":"page"},{"location":"95-reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"95-reference/","page":"Reference","title":"Reference","text":"Pages = [\"95-reference.md\"]","category":"page"},{"location":"95-reference/","page":"Reference","title":"Reference","text":"Modules = [RationalVectorFitting]","category":"page"},{"location":"95-reference/#RationalVectorFitting.build_Abase!-Tuple{Any, Any, Any}","page":"Reference","title":"RationalVectorFitting.build_Abase!","text":"build_Abase!(A1, s, poles)\n\nBuilds the base matrix with the 1 / (s - p), 1.0 and s coefficients. It is assumed that the poles were sorted by cplxpair.\n\n\n\n\n\n","category":"method"},{"location":"95-reference/#RationalVectorFitting.cplxpair-Tuple{Any}","page":"Reference","title":"RationalVectorFitting.cplxpair","text":"cplxpair(x)\n\nTo be used to sort an array by real values, then complex conjugate pairs. The more positive reals will be first, then the pairs with smaller imaginary part.\n\nExample\n\nreal_values = [-1, -3, -2]\ncomplex_values = [-1 + 1im, -2 - 2im, -1 + 2im]\nsorted_values = sort!([complex_values; conj(complex_values); real_values], by = cplxpair)\n\n# output\n\n9-element Vector{Complex{Int64}}:\n -1 + 0im\n -2 + 0im\n -3 + 0im\n -1 - 1im\n -1 + 1im\n -1 - 2im\n -1 + 2im\n -2 - 2im\n -2 + 2im\n\n\n\n\n\n","category":"method"},{"location":"95-reference/#RationalVectorFitting.pole_identification-NTuple{5, Any}","page":"Reference","title":"RationalVectorFitting.pole_identification","text":"pole_identification(s, f, poles, weight, relaxed) -> new_poles\n\nStage 1 of the Vector Fitting.\n\nSee also vector_fitting, residue_identification.\n\n\n\n\n\n","category":"method"},{"location":"95-reference/#RationalVectorFitting.rational-NTuple{5, Any}","page":"Reference","title":"RationalVectorFitting.rational","text":"rational(s, poles, residues, d, h) -> `f(s)`\n\nRational transfer function with complex frequencies s, a set of poles a_n, residues r_n and real constants d and h.\n\nsum_n=1^N fracr_ns - a_n + d + s h\n\n\n\n\n\n","category":"method"},{"location":"95-reference/#RationalVectorFitting.recommended_init_poles-Tuple{Any, Any}","page":"Reference","title":"RationalVectorFitting.recommended_init_poles","text":"recommended_init_poles(s, Npairs) -> init_poles\n\nBuilds a vector of recommended initial poles sorted by cplxpair.\n\n\n\n\n\n","category":"method"},{"location":"95-reference/#RationalVectorFitting.residue_identification-NTuple{4, Any}","page":"Reference","title":"RationalVectorFitting.residue_identification","text":"residue_identification(s, f, poles, weight) -> residues, d, h\n\nStage 2 of the Vector Fitting. This should be called separately for each column of f and weight when ndims(f) == 2.\n\nSee also vector_fitting, pole_identification.\n\n\n\n\n\n","category":"method"},{"location":"95-reference/#RationalVectorFitting.vector_fitting","page":"Reference","title":"RationalVectorFitting.vector_fitting","text":"vector_fitting(\n    s,\n    f,\n    init_poles,\n    weight = 1;\n    relaxed = true,\n    force_stable = true,\n    maxiter = 5,\n    tol = 1e-12,\n) -> poles, residues, d, h, fitted, error_norm\n\nVector Fitting of the array f with complex frequency s using a set of initial poles init_poles.\n\nf can be a matrix of dimensions (Ns, Nc) and the fitting will be over its columns using a set of common poles.\n\nrelaxed controls the nontriviality constraint. relaxed=true usually converges faster, but can be less stable for non-smooth functions.\n\nforce_stable controls if unstable poles should be reflected to the semi-left complex plane, that is, forced to have negative real part.\n\nmaxiter is the maximum of iterations that will be done to try to achieve a convergence with desired error_norm tolerance tol.\n\nSee also recommended_init_poles, rational, pole_identification, residue_identification.\n\n\n\n\n\n","category":"function"},{"location":"90-contributing/#contributing","page":"Contributing guidelines","title":"Contributing guidelines","text":"","category":"section"},{"location":"90-contributing/","page":"Contributing guidelines","title":"Contributing guidelines","text":"First of all, thanks for the interest!","category":"page"},{"location":"90-contributing/","page":"Contributing guidelines","title":"Contributing guidelines","text":"We welcome all kinds of contribution, including, but not limited to code, documentation, examples, configuration, issue creating, etc.","category":"page"},{"location":"90-contributing/","page":"Contributing guidelines","title":"Contributing guidelines","text":"Be polite and respectful, and follow the code of conduct.","category":"page"},{"location":"90-contributing/#Bug-reports-and-discussions","page":"Contributing guidelines","title":"Bug reports and discussions","text":"","category":"section"},{"location":"90-contributing/","page":"Contributing guidelines","title":"Contributing guidelines","text":"If you think you found a bug, feel free to open an issue. Focused suggestions and requests can also be opened as issues. Before opening a pull request, start an issue or a discussion on the topic, please.","category":"page"},{"location":"90-contributing/#Working-on-an-issue","page":"Contributing guidelines","title":"Working on an issue","text":"","category":"section"},{"location":"90-contributing/","page":"Contributing guidelines","title":"Contributing guidelines","text":"If you found an issue that interests you, comment on that issue what your plans are. If the solution to the issue is clear, you can immediately create a pull request (see below). Otherwise, say what your proposed solution is and wait for a discussion around it.","category":"page"},{"location":"90-contributing/","page":"Contributing guidelines","title":"Contributing guidelines","text":"tip: Tip\nFeel free to ping us after a few days if there are no responses.","category":"page"},{"location":"90-contributing/","page":"Contributing guidelines","title":"Contributing guidelines","text":"If your solution involves code (or something that requires running the package locally), check the developer documentation. Otherwise, you can use the GitHub interface directly to create your pull request.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"CurrentModule = RationalVectorFitting","category":"page"},{"location":"#RationalVectorFitting.jl","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"","category":"section"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"Documentation for RationalVectorFitting.jl, a Fast Relaxed Vector Fitting algorithm in Julia.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"Given a transfer function f(s) = y, the Vector Fitting algorithm tries to find a rational approximation","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"f(s) approx sum_n=1^N fracr_ns - a_n + d + s h","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"where s is the complex frequency, r_n are the complex residues, a_n are the complex poles, d and h are real constants.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"The transfer function can be a vector f(s) = y_1 dots y_m and the Vector Fitting algorithm will fit the response using the same set of poles a_n for all y_m.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"A rational representation of a transfer function makes it easier to find a state space canonical realization of a system and to perform convolutions.","category":"page"},{"location":"#Examples","page":"RationalVectorFitting.jl","title":"Examples","text":"","category":"section"},{"location":"#Example-1","page":"RationalVectorFitting.jl","title":"Example 1","text":"","category":"section"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"This first example fits an order 3 smooth function using a set of real initial poles.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"using RationalVectorFitting\nusing Plots\n\nfreq = exp10.(range(0, 4, length = 101))  # logspace\ns = 2im * pi * freq\npoles1 = [-5.0, -100 - 500im, -100 + 500im]\nresidues1 = [2.0, 30 - 40im, 30 + 40im]\nd1 = 0.5\nh1 = 0.0\nf1 = rational(s, poles1, residues1, d1, h1)\n\ninit_poles = -2pi * exp10.(range(0, 4, length = 3))\npoles, residues, d, h, fitted, error_norm = vector_fitting(s, f1, init_poles)\n\np1 = plot(\n    freq,\n    abs.(f1),\n    label = \"f(s)\",\n    linecolor = :blue,\n    xlabel = \"Frequency [Hz]\",\n    ylabel = \"Magnitude\",\n    xaxis = :log,\n    yaxis = :log,\n    legend = :right,\n)\nplot!(freq, abs.(fitted), label = \"fitted\", linecolor = :darkorange)\nplot!(freq, abs.(f1 - fitted), label = \"deviation\", linecolor = :green)\nsavefig(\"ex1.svg\"); nothing # hide","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"(Image: ex1)","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"","category":"page"},{"location":"#Example-2","page":"RationalVectorFitting.jl","title":"Example 2","text":"","category":"section"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"Fitting an order 18 function.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"using RationalVectorFitting\nusing Plots\n\npoles1 = 2π .* [\n    -41000,\n    -4500,\n    -100 - 5000im,\n    -100 + 5000im,\n    -120 - 15000im,\n    -120 + 15000im,\n    -3000 - 35000im,\n    -3000 + 35000im,\n    -200 - 45000im,\n    -200 + 45000im,\n    -1500 - 45000im,\n    -1500 + 45000im,\n    -500 - 70000im,\n    -500 + 70000im,\n    -1000 - 73000im,\n    -1000 + 73000im,\n    -2000 - 90000im,\n    -2000 + 90000im,\n]\n\nresidues1 = 2π .* [\n    -83000,\n    -3000,\n    -5 - 7000im,\n    -5 + 7000im,\n    -20 - 18000im,\n    -20 + 18000im,\n    6000 - 45000im,\n    6000 + 45000im,\n    40 - 60000im,\n    40 + 60000im,\n    90 - 10000im,\n    90 + 10000im,\n    50000 - 80000im,\n    50000 + 80000im,\n    1000 - 45000im,\n    1000 + 45000im,\n    -5000 - 92000im,\n    -5000 + 92000im,\n]\n\nd1 = 0.2\nh1 = 2e-5\n\nfreq = (range(0, 1e5, length = 200))\ns = 2im * pi * freq\nf1 = rational(s, poles1, residues1, d1, h1)\n\ninit_poles = 2π .* [\n    -1e-2 + 1im,\n    -1.11e2 + 1.11e4im,\n    -2.22e2 + 2.22e4im,\n    -3.33e2 + 3.33e4im,\n    -4.44e2 + 4.44e4im,\n    -5.55e2 + 5.55e4im,\n    -6.66e2 + 7.77e4im,\n    -8.88e2 + 8.88e4im,\n    -1e3 + 1e5im,\n]\n# now we add the missing half of complex pairs\nreal_poles = filter(isreal, init_poles)\ncomplex_poles = filter(!isreal, init_poles)\ninit_poles = sort!([real_poles; complex_poles; conj(complex_poles)], by = cplxpair)\n\npoles, residues, d, h, fitted, error_norm = vector_fitting(s, f1, init_poles)\n\np1 = plot(\n    freq,\n    abs.(f1),\n    label = \"f(s)\",\n    linecolor = :blue,\n    xlabel = \"Frequency [Hz]\",\n    ylabel = \"Magnitude\",\n    yaxis = :log,\n    legend = :right,\n)\nplot!(freq, abs.(fitted), label = \"fitted\", linecolor = :darkorange)\nplot!(freq, abs.(f1 - fitted), label = \"deviation\", linecolor = :green)\nsavefig(\"ex2.svg\"); nothing # hide","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"(Image: ex2)","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"","category":"page"},{"location":"#Example-3","page":"RationalVectorFitting.jl","title":"Example 3","text":"","category":"section"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"Order 6 fitting of the measured admittance function from a distribution transformer, which we took from SINTEF's VFIT3.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"using RationalVectorFitting\nusing Plots\n\nfid1 = split.(readlines(\"03PK10.txt\"))\nf = zeros(ComplexF64, 160)\nfor k = 1:160\n    A1 = parse(Float64, fid1[k+1][1])\n    A2 = parse(Float64, fid1[k+1][2])\n    f[k] = A1 * exp(1im * A2 * pi / 180)\nend\nw = 2pi * range(0, 10e6, length = 401)\nw = w[2:161]\ns = 1im .* w\nfreq = imag(s) ./ (2pi)\n\nN = 6  # Order of approximation\ninit_poles = recommended_init_poles(s, N)\n\npoles, residues, d, h, fitted, error_norm = vector_fitting(s, f, init_poles)\n\np1 = plot(\n    freq,\n    abs.(f),\n    label = \"f(s)\",\n    linecolor = :blue,\n    xlabel = \"Frequency [Hz]\",\n    ylabel = \"Magnitude\",\n    yaxis = :log,\n    legend = :right,\n)\nplot!(freq, abs.(fitted), label = \"fitted\", linecolor = :darkorange)\nplot!(freq, abs.(f - fitted), label = \"deviation\", linecolor = :green)\nsavefig(p1, \"ex3-mag.svg\"); nothing # hide\n\np2 = plot(\n    freq,\n    rad2deg.(angle.(f)),\n    label = \"f(s)\",\n    linecolor = :blue,\n    xlabel = \"Frequency [Hz]\",\n    ylabel = \"Phase angle [deg]\",\n    legend = :right,\n)\nplot!(freq, rad2deg.(angle.(fitted)), label = \"fitted\", linecolor = :darkorange)\nsavefig(p2, \"ex3-phase.svg\"); nothing # hide","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"(Image: ex3-mag)","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"(Image: ex3-phase)","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"","category":"page"},{"location":"#Example-4","page":"RationalVectorFitting.jl","title":"Example 4","text":"","category":"section"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"Order 50 fitting of the first column of a six-terminal Frequency Domain Network Equivalent (FDNE) system. We took the data from SINTEF's VFIT3.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"using RationalVectorFitting\nusing Plots\n\nopen(\"fdne.txt\", \"r\") do fid1\n    Nc = parse(Int, readline(fid1))\n    Ns = parse(Int, readline(fid1))\n    global s = Array{ComplexF64}(undef, Ns)\n    global bigY = Array{ComplexF64}(undef, Nc, Nc, Ns)\n    for k = 1:Ns\n        s[k] = complex(0, parse(Float64, readline(fid1)))\n        for row = 1:Nc\n            for col = 1:Nc\n                a1 = parse(Float64, readline(fid1))\n                a2 = parse(Float64, readline(fid1))\n                bigY[row, col, k] = complex(a1, a2)\n            end\n        end\n    end\nend\nf = transpose(bigY[:, 1, :])  # just the 1st column\nfreq = imag(s) ./ (2pi)\n\nNp = 50  # order of fitting\ninit_poles = recommended_init_poles(s, Np)\npoles, residues, d, h, fitted, error_norm = vector_fitting(s, f, init_poles)\n@show error_norm","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"Now we plot the result. Blue lines are the response being fitted, orange lines are the fitted values and green lines are the deviations.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"p1 = plot(\n    freq,\n    abs.(f),\n    label = \"f(s)\",\n    linecolor = :blue,\n    xlabel = \"Frequency [Hz]\",\n    ylabel = \"Magnitude\",\n    yaxis = :log,\n    legend = false,\n)\nplot!(freq, abs.(fitted), label = \"fitted\", linecolor = :darkorange)\nplot!(freq, abs.(f - fitted), label = \"deviation\", linecolor = :green)\nsavefig(p1, \"ex4-1.svg\")","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"(Image: ex4-1)","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"That does not look very good. What if we try with a weighting w(s)?","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"w(s) = frac1sqrtf(s)","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"weight = @. 1.0 / sqrt(abs(f))\npoles, residues, d, h, fitted, error_norm = vector_fitting(s, f, init_poles, weight)\n@show error_norm\n\np1 = plot(\n    freq,\n    abs.(f),\n    label = \"f(s)\",\n    linecolor = :blue,\n    xlabel = \"Frequency [Hz]\",\n    ylabel = \"Magnitude\",\n    yaxis = :log,\n    legend = false,\n)\nplot!(freq, abs.(fitted), label = \"fitted\", linecolor = :darkorange)\nplot!(freq, abs.(f - fitted), label = \"deviation\", linecolor = :green)\nsavefig(p1, \"ex4-2.svg\"); nothing # hide","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"(Image: ex4-2)","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"Damn, it got worse :(","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"What if we disable the relaxed non-triviality constraint?","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"weight = @. 1.0 / sqrt(abs(f))\npoles, residues, d, h, fitted, error_norm = vector_fitting(s, f, init_poles, weight; relaxed = false)\n@show error_norm\n\np1 = plot(\n    freq,\n    abs.(f),\n    label = \"f(s)\",\n    linecolor = :blue,\n    xlabel = \"Frequency [Hz]\",\n    ylabel = \"Magnitude\",\n    yaxis = :log,\n    legend = false,\n)\nplot!(freq, abs.(fitted), label = \"fitted\", linecolor = :darkorange)\nplot!(freq, abs.(f - fitted), label = \"deviation\", linecolor = :green)\nsavefig(p1, \"ex4-3.svg\"); nothing # hide","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"(Image: ex4-3)","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"In some frequency ranges the fitting got better, but worse in others when compared to the first figure.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"Finally, let's plot the phase angle using a helper function from the package DSP.jl","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"import DSP\n\nf_phase = rad2deg.(DSP.unwrap(angle.(f), dims=1))\np1 = plot(\n    freq,\n    f_phase,\n    label = \"f(s)\",\n    linecolor = :blue,\n    xlabel = \"Frequency [Hz]\",\n    ylabel = \"Phase angle [deg]\",\n    legend = false,\n)\nfitted_phase = rad2deg.(DSP.unwrap(angle.(fitted), dims=1))\nplot!(freq, fitted_phase, label = \"fitted\", linecolor = :darkorange)\nsavefig(p1, \"ex4-4.svg\"); nothing # hide","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"(Image: ex4-4)","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"Unfortunately, the Vector Fitting algorithm relies a lot on trial and error of the user. The fitting could be better if a higher order was used, but that has a tendency to lead to numerically unstable state-space models. Hence, we try to do a low order fitting first.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"There are efforts in the literature to make the algorithm more automatic (which some day may be incorporated into this package), see [4].","category":"page"},{"location":"#Bibliography","page":"RationalVectorFitting.jl","title":"Bibliography","text":"","category":"section"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"[1] B. Gustavsen and A. Semlyen, \"Rational approximation of frequency domain responses by vector fitting,\" in IEEE Transactions on Power Delivery, vol. 14, no. 3, pp. 1052-1061, July 1999, doi: 10.1109/61.772353.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"[2] B. Gustavsen, \"Improving the pole relocating properties of vector fitting,\" in IEEE Transactions on Power Delivery, vol. 21, no. 3, pp. 1587-1592, July 2006, doi: 10.1109/TPWRD.2005.860281.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"[3] D. Deschrijver, M. Mrozowski, T. Dhaene and D. De Zutter, \"Macromodeling of Multiport Systems Using a Fast Implementation of the Vector Fitting Method,\" in IEEE Microwave and Wireless Components Letters, vol. 18, no. 6, pp. 383-385, June 2008, doi: 10.1109/LMWC.2008.922585.","category":"page"},{"location":"","page":"RationalVectorFitting.jl","title":"RationalVectorFitting.jl","text":"[4] A. M. Smith, S. D'Arco, J. A. Suul and B. Gustavsen, \"Improved Pole Placement and Compaction of MIMO Vector Fitting Applied to System Identification,\" in IEEE Transactions on Power Delivery, vol. 39, no. 2, pp. 1259-1270, April 2024, doi: 10.1109/TPWRD.2024.3364836.","category":"page"}]
}
