<?php

namespace Drupal\clearview_infotech\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'Socail Links' block.
 *
 * @Block(
 *   id = "clearview_infotech_social_links_block",
 *   admin_label = @Translation("Social Links block"),
 *   category = @Translation("Clearview Infotech"),
 * )
 */
class SocialLinksBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'linkedin' => 'https://www.linkedin.com/yourname',
      'twitter' => 'https://www.twitter.com/yourname',
      'instagram' => 'https://www.instagram.com/yourname',
      'facebook' => 'https://www.facebook.com/yourname',
    ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
	  
	  
	$linkedin = $this->configuration['linkedin'];
	$twitter = $this->configuration['twitter'];
	$instagram = $this->configuration['instagram'];
	$facebook = $this->configuration['facebook'];
	
	$socialData = 	'<ul class="social_icon_list">
						<li>
							<a href="'.$linkedin.'" target="_blank">
							<span class="fa fa-linkedin fa-2x"></span>
							</a>
						</li>
						<li>
							<a href="'.$twitter.'" target="_blank">
							<span class="fa fa-twitter fa-2x"></span>
							</a>
						</li>
						<li>
							<a href="'.$instagram.'" target="_blank">
							<span class="fa fa-instagram fa-2x"></span>
							</a>
						</li>
						<li>
							<a href="'.$facebook.'" target="_blank">
							<span class="fa fa-facebook fa-2x"></span>
							</a>
						</li>
					</ul>';

    $build = [
      '#markup' => '<div class="social-media-container">' . $socialData . '</div>',
    ];
	
    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);

    $default_configuration = $this->defaultConfiguration();

   $form['linkedin'] = [
      '#type' => 'url',
      '#title' => $this->t('Linkedin Link'),
      '#default_value' => isset($this->configuration['linkedin']) ? $this->configuration['linkedin'] : $default_configuration['linkedin'],
    ];
	
	$form['twitter'] = [
      '#type' => 'url',
      '#title' => $this->t('Twitter Link'),
      '#default_value' => isset($this->configuration['twitter']) ? $this->configuration['twitter'] : $default_configuration['twitter'],
    ];
	
	$form['instagram'] = [
      '#type' => 'url',
      '#title' => $this->t('Instagram Link'),
      '#default_value' => isset($this->configuration['instagram']) ? $this->configuration['instagram'] : $default_configuration['instagram'],
    ];

    $form['facebook'] = [
      '#type' => 'url',
      '#title' => $this->t('Facebook Link'),
      '#default_value' => isset($this->configuration['facebook']) ? $this->configuration['facebook'] : $default_configuration['facebook'],
    ];     

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);

    $this->configuration['linkedin'] = $form_state->getValue('linkedin', $this->defaultConfiguration()['linkedin']);
    $this->configuration['twitter'] = $form_state->getValue('twitter', $this->defaultConfiguration()['twitter']);
    $this->configuration['instagram'] = $form_state->getValue('instagram', $this->defaultConfiguration()['instagram']);
    $this->configuration['facebook'] = $form_state->getValue('facebook', $this->defaultConfiguration()['facebook']);
     
  }

 

}
