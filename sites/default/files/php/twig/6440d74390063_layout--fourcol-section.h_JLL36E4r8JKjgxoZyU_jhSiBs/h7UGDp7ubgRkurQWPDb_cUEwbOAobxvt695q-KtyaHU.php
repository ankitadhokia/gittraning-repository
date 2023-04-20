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

/* core/themes/stable/layouts/fourcol_section/layout--fourcol-section.html.twig */
class __TwigTemplate_66ddd3420adaf4302420bd2f2ea80444effd8cc48c0ec0bb188ff5dd35cf165e extends \Twig\Template
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
        // line 12
        $context["classes"] = [0 => "layout", 1 => "layout--fourcol-section"];
        // line 17
        if (($context["content"] ?? null)) {
            // line 18
            echo "  <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 18), 18, $this->source), "html", null, true);
            echo ">

    ";
            // line 20
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "first", [], "any", false, false, true, 20)) {
                // line 21
                echo "      <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "first", [], "any", false, false, true, 21), "addClass", [0 => "layout__region", 1 => "layout__region--first"], "method", false, false, true, 21), 21, $this->source), "html", null, true);
                echo ">
        ";
                // line 22
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "first", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 25
            echo "
    ";
            // line 26
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "second", [], "any", false, false, true, 26)) {
                // line 27
                echo "      <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "second", [], "any", false, false, true, 27), "addClass", [0 => "layout__region", 1 => "layout__region--second"], "method", false, false, true, 27), 27, $this->source), "html", null, true);
                echo ">
        ";
                // line 28
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "second", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 31
            echo "
    ";
            // line 32
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "third", [], "any", false, false, true, 32)) {
                // line 33
                echo "      <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "third", [], "any", false, false, true, 33), "addClass", [0 => "layout__region", 1 => "layout__region--third"], "method", false, false, true, 33), 33, $this->source), "html", null, true);
                echo ">
        ";
                // line 34
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "third", [], "any", false, false, true, 34), 34, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 37
            echo "
    ";
            // line 38
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "fourth", [], "any", false, false, true, 38)) {
                // line 39
                echo "      <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "fourth", [], "any", false, false, true, 39), "addClass", [0 => "layout__region", 1 => "layout__region--fourth"], "method", false, false, true, 39), 39, $this->source), "html", null, true);
                echo ">
        ";
                // line 40
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "fourth", [], "any", false, false, true, 40), 40, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 43
            echo "
  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "core/themes/stable/layouts/fourcol_section/layout--fourcol-section.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  110 => 43,  104 => 40,  99 => 39,  97 => 38,  94 => 37,  88 => 34,  83 => 33,  81 => 32,  78 => 31,  72 => 28,  67 => 27,  65 => 26,  62 => 25,  56 => 22,  51 => 21,  49 => 20,  43 => 18,  41 => 17,  39 => 12,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Theme override for a four-column 25%-25%-25%-25% layout.
 *
 * Available variables:
 * - content: The content for this layout.
 * - attributes: HTML attributes for the layout <div>.
 */
#}
{%
  set classes = [
    'layout',
    'layout--fourcol-section',
  ]
%}
{% if content %}
  <div{{ attributes.addClass(classes) }}>

    {% if content.first %}
      <div {{ region_attributes.first.addClass('layout__region', 'layout__region--first') }}>
        {{ content.first }}
      </div>
    {% endif %}

    {% if content.second %}
      <div {{ region_attributes.second.addClass('layout__region', 'layout__region--second') }}>
        {{ content.second }}
      </div>
    {% endif %}

    {% if content.third %}
      <div {{ region_attributes.third.addClass('layout__region', 'layout__region--third') }}>
        {{ content.third }}
      </div>
    {% endif %}

    {% if content.fourth %}
      <div {{ region_attributes.fourth.addClass('layout__region', 'layout__region--fourth') }}>
        {{ content.fourth }}
      </div>
    {% endif %}

  </div>
{% endif %}
", "core/themes/stable/layouts/fourcol_section/layout--fourcol-section.html.twig", "/home/itmagica/web/drupal9/core/themes/stable/layouts/fourcol_section/layout--fourcol-section.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 12, "if" => 17);
        static $filters = array("escape" => 18);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
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
