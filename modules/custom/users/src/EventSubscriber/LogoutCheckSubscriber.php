<?php
namespace Drupal\users\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Redirect users to the login page if they have been logged out.
 */
class LogoutCheckSubscriber implements EventSubscriberInterface {

  /**
   * The session object.
   *
   * @var \Symfony\Component\HttpFoundation\Session\SessionInterface
   */
  protected $session;

  /**
   * Constructor.
   *
   * @param \Symfony\Component\HttpFoundation\Session\SessionInterface $session
   *   The session object.
   */
  public function __construct(SessionInterface $session) {
    $this->session = $session;
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    return [
      KernelEvents::REQUEST => 'checkLogout',
    ];
  }

  /**
   * Check if the user has been logged out since their last login.
   *
   * @param \Symfony\Component\HttpKernel\Event\RequestEvent $event
   *   The request event.
   */
  public function checkLogout(RequestEvent $event) {
    $request = $event->getRequest();
    $current_path = $request->getPathInfo();
   
    // Check if the user is logged in.
    if (\Drupal::currentUser()->isAnonymous()) {
      // Check if the user was logged in during their last visit.
      $last_login = $this->session->get('last_login');
      if ($last_login && $last_login > REQUEST_TIME) {
        // Redirect the user to the login page.
        $redirect_url = \Drupal\Core\Url::fromRoute('user.login')->toString();
        $response = new RedirectResponse($redirect_url);
        $event->setResponse($response);
      }
    }
//dump(Drupal::service('session')->isStarted());exit;
    // Save the current login time to the session.
    $this->session->set('last_login', REQUEST_TIME);
  }

}
