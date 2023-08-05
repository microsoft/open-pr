# open-pr

This is a simple Javascript redirector deployed in GitHub Pages for opening a GitHub Pull Request
in Microsoft's CodeFlow review tool. The URL format would look like this:

https://microsoft.github.io/open-pr/?codeflow=https://github.com/org/repos/pull/12345

This loads a simple HTML page with 2-lines of Javascript that will change to a URI that will
open the CodeFlow application, if installed. This exists so that an HTTPS link can be embedded
in Markdown or other site that does not allow custom URI-schemes. GitHub Flavored Markdown is the
primary target for this solution.

The idea for this comes from this repository: https://github.com/intradeus/http-protocol-redirector. Rather
than have a generic redirector, this will only allow one specific type of redirection. If other tools
to view Pull Requests via a custom URI become available it would be easy to extend this to support
other tools. VS Code does not seem to offer this currently, but originally thought that would be an
option to include here in addition to CodeFlow.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
