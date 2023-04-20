<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/custom_theme/templates/page.html.twig */
class __TwigTemplate_440353cd2ace6b35a246e7e6771b423aa59417946733e17f4179557113559e7c extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<header aria-label=\"Site header\" class=\"header\" id=\"header\" role=\"banner\">
     ";
        // line 2
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_menu", [], "any", false, false, true, 2), 2, $this->source), "html", null, true);
        echo "
     ";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "branding", [], "any", false, false, true, 3), 3, $this->source), "html", null, true);
        echo "
     ";
        // line 4
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navigation", [], "any", false, false, true, 4), 4, $this->source), "html", null, true);
        echo "
     ";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "search", [], "any", false, false, true, 5), 5, $this->source), "html", null, true);
        echo "
    </header>
<section class=\"featured\" id=\"featured\" role=\"complementary\">
   ";
        // line 8
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured", [], "any", false, false, true, 8), 8, $this->source), "html", null, true);
        echo "
    <div class=\"banner\">
      <h1>Welcome to the site</h1>
      <h1 class=\"banner-text\">Drupal9 Custom Theme!!</h1>
   </div>  
</section>
<section class=\"main\" id=\"main\"> 
    <main aria-label=\"Site main content\" class=\"content\" id=\"content\" role=\"main\">
";
        // line 16
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 16), 16, $this->source), "html", null, true);
        echo "
      </main>
   <aside class=\"right--sidebar\" id=\"sidebar\" role=\"complementary\">
     ";
        // line 19
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "right_sidebar", [], "any", false, false, true, 19), 19, $this->source), "html", null, true);
        echo "
   </aside>
</section>
<footer aria-label=\"Site footer\" class=\"footer\" id=\"footer\" role=\"contentinfo\">
   <div class=\"footer--top\">
     ";
        // line 24
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 24), 24, $this->source), "html", null, true);
        echo "
     ";
        // line 25
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 25), 25, $this->source), "html", null, true);
        echo "
     ";
        // line 26
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 26), 26, $this->source), "html", null, true);
        echo "
   </div>
   <div class=\"footer--bottom\">
       ";
        // line 29
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_bottom", [], "any", false, false, true, 29), 29, $this->source), "html", null, true);
        echo "
   </div>
</footer>";
    }

    public function getTemplateName()
    {
        return "themes/custom/custom_theme/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  99 => 29,  93 => 26,  89 => 25,  85 => 24,  77 => 19,  71 => 16,  60 => 8,  54 => 5,  50 => 4,  46 => 3,  42 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<header aria-label=\"Site header\" class=\"header\" id=\"header\" role=\"banner\">
     {{ page.main_menu}}
     {{ page.branding }}
     {{ page.navigation }}
     {{ page.search }}
    </header>
<section class=\"featured\" id=\"featured\" role=\"complementary\">
   {{ page.featured }}
    <div class=\"banner\">
      <h1>Welcome to the site</h1>
      <h1 class=\"banner-text\">Drupal9 Custom Theme!!</h1>
   </div>  
</section>
<section class=\"main\" id=\"main\"> 
    <main aria-label=\"Site main content\" class=\"content\" id=\"content\" role=\"main\">
{{ page.content }}
      </main>
   <aside class=\"right--sidebar\" id=\"sidebar\" role=\"complementary\">
     {{ page.right_sidebar }}
   </aside>
</section>
<footer aria-label=\"Site footer\" class=\"footer\" id=\"footer\" role=\"contentinfo\">
   <div class=\"footer--top\">
     {{ page.footer_first }}
     {{ page.footer_second }}
     {{ page.footer_third }}
   </div>
   <div class=\"footer--bottom\">
       {{ page.footer_bottom }}
   </div>
</footer>", "themes/custom/custom_theme/templates/page.html.twig", "/home/itmagica/web/drupal9/themes/custom/custom_theme/templates/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 2);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
